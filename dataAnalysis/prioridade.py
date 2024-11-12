# Esse código analisa e faz um rank de quais tasks tem mais prioridade em toda tabela separando
# em 3 ranks diferentes, uma para alta, média, e baixa prioridade.

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

        # Carregar a tabela tarefa
        tarefa_df = pd.read_sql_query("SELECT nome, prioridade FROM tarefa;", conn)
        
        # Verificar se existem dados na tablea
        if tarefa_df.empty:
            print("Nenhuma tarefa foi encontrada na base de dados.")
            return

        # 3 DataFrames para cada prioridade
        high_priority = tarefa_df[tarefa_df['prioridade'] == 'Alta']
        medium_priority = tarefa_df[tarefa_df['prioridade'] == 'Média']
        low_priority = tarefa_df[tarefa_df['prioridade'] == 'Baixa']

        # Contar e ordenar bonito
        top_high = high_priority['nome'].value_counts().head(3)
        top_medium = medium_priority['nome'].value_counts().head(3)
        top_low = low_priority['nome'].value_counts().head(3)

        # Exibir essa bosta no terminal agora vai te implloro
        print("\nTop 3 Tasks - Alta Prioridade:")
        print(top_high)

        print("\nTop 3 Tasks - Média Prioridade:")
        print(top_medium)

        print("\nTop 3 Tasks - Baixa Prioridade:")
        print(top_low)
    
    # se isso aqui rodar é pq deu merda
    except sqlite3.Error as e:
        print(f"Deu erro aqui pae, anote a placa {e} ")
    except pd.errors.DatabaseError as e:
        print(f"Deu erro aqui no Pandas pae, anote a placa: {e} ")

    # deu bom
    finally:
        if 'conn' in locals():
            conn.close()

# Chame o lindo do analyze_task_priority
if __name__ == "__main__":
    db_file = 'database.db'  # Não mexe nessa linha q tá tudo suave
    analyze_task_priority(db_file)
