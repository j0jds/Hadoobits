# Esse cara calcula a porcentagem de tasks por prioridade

import sqlite3
import pandas as pd
import os

db_file = 'database.db'

if not os.path.exists(db_file):
    print(f"Arquivo {db_file} não existe.")
else:
    try:
        conn = sqlite3.connect(db_file)
        print("Conexão sucedida.")

        tarefa_df = pd.read_sql_query("SELECT prioridade FROM tarefa;", conn)

        total_tasks = tarefa_df.shape[0]

        priority_counts = tarefa_df['prioridade'].value_counts().reset_index()
        priority_counts.columns = ['prioridade', 'num_tarefas']

        priority_counts['porcentagem'] = (priority_counts['num_tarefas'] / total_tasks) * 100

        print("\nPorcentagem de Tarefas por Prioridade:")
        priority_counts.index = range(1, len(priority_counts) + 1)
        print(priority_counts[['prioridade', 'num_tarefas', 'porcentagem']])

    except sqlite3.Error as e:
        print(f"Ocorreu um erro: {e}")

    finally:
        if 'conn' in locals():
            conn.close()
