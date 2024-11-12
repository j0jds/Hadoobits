import sqlite3
import pandas as pd
import os

db_file = 'database.db'

if not os.path.exists(db_file):
    print(f"Arquivo {db_file} foi comprar cigarro.")
else:
    try:
        conn = sqlite3.connect(db_file)
        print("Conexão sucedida.")

        tarefa_df = pd.read_sql_query("SELECT * FROM tarefa;", conn)

        task_counts = tarefa_df['nome'].value_counts()

        task_counts = tarefa_df['nome'].value_counts()

        total_tasks = task_counts.sum()
        task_percentages = (task_counts / total_tasks) * 100

        results_df = pd.DataFrame({
            'Quantidade': task_counts,
            'Porcentagem': task_percentages
        }).reset_index()

        results_df.columns = ['Tarefa', 'Quantidade', 'Porcentagem']

        results_df['Rank'] = results_df['Quantidade'].rank(method='min', ascending=False)

        results_df.sort_values(by='Quantidade', ascending=False, inplace=True)

        print("\nTop 10 Tarefas:")
        print(results_df.head(10)[['Tarefa', 'Quantidade', 'Porcentagem', 'Rank']])

    except sqlite3.Error as e:
        print(f"Ocorreu um erro: {e}")

    finally:
        if 'conn' in locals():
            conn.close()
