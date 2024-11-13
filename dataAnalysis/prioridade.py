import sqlite3
import pandas as pd
import os

def analyze_task_priority(db_file):
    if not os.path.exists(db_file):
        print(f"O dito cujo <{db_file}> tá escondido.")
        return
    
    try:
        conn = sqlite3.connect(db_file)
        print("Conexão top!.")

        tarefa_df = pd.read_sql_query("SELECT id, nome, prioridade FROM tarefa limit 20;", conn)
        
        if tarefa_df.empty:
            print("Nenhuma tarefa foi encontrada na base de dados.")
            return

        high_priority = tarefa_df[tarefa_df['prioridade'] == 'Alta']
        medium_priority = tarefa_df[tarefa_df['prioridade'] == 'Média']
        low_priority = tarefa_df[tarefa_df['prioridade'] == 'Baixa']

        top_high = high_priority.groupby(['id', 'nome', 'prioridade']).size().reset_index(name='count').sort_values(by='count', ascending=False).head(3)
        top_medium = medium_priority.groupby(['id', 'nome', 'prioridade']).size().reset_index(name='count').sort_values(by='count', ascending=False).head(3)
        top_low = low_priority.groupby(['id', 'nome', 'prioridade']).size().reset_index(name='count').sort_values(by='count', ascending=False).head(3)

        top_high['type'] = 'Not Found'
        top_medium['type'] = 'Not Found'
        top_low['type'] = 'Not Found'

        total_tasks = []
        total_tasks.extend(top_high[['id', 'nome', 'prioridade', 'type']].to_dict(orient='records'))
        total_tasks.extend(top_medium[['id', 'nome', 'prioridade', 'type']].to_dict(orient='records'))
        total_tasks.extend(top_low[['id', 'nome', 'prioridade', 'type']].to_dict(orient='records'))

        total_tasks = total_tasks[:10]  # Limite de 10 tarefas

        result = {
            "tasks": total_tasks
        }
        
        print("Resultado das tarefas:", result)

    except sqlite3.Error as e:
        print(f"Deu erro aqui pae, anote a placa {e} ")
    except pd.errors.DatabaseError as e:
        print(f"Deu erro aqui no Pandas pae, anote a placa: {e} ")

    finally:
        if 'conn' in locals():
            conn.close()

if __name__ == "__main__":
    db_file = 'database.db'
    analyze_task_priority(db_file)
