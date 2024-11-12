# Esse cara faz um rank com os usuários que tem mais tarefas e adiciona uma porcentagem a partir do total de tarefas

import sqlite3
import pandas as pd
import os

db_file = 'database.db'

if not os.path.exists(db_file):
    print(f"Arquivo {db_file} não existe.")
else:
    try:
        conn = sqlite3.connect(db_file)
        print(f"Eu, {db_file}, existo mas não penso.")

        membros_df = pd.read_sql_query("SELECT id, nome FROM membros;", conn)
        tarefa_df = pd.read_sql_query("SELECT usuario_id FROM tarefa;", conn)

        total_tasks = tarefa_df.shape[0]

        task_counts = tarefa_df['usuario_id'].value_counts().reset_index()
        task_counts.columns = ['usuario_id', 'num_tarefas']

        task_counts = task_counts.merge(membros_df, left_on='usuario_id', right_on='id', how='left')
        task_counts['porcentagem'] = (task_counts['num_tarefas'] / total_tasks) * 100

        top_users = task_counts.sort_values(by='num_tarefas', ascending=False).head(10)

        print("\nTop 10 Usuários por Número de Tarefas:")
        top_users.index = range(1, 11)
        print(top_users[['nome', 'num_tarefas', 'porcentagem']])

    except sqlite3.Error as e:
        print(f"Ocorreu um erro: {e}")

    finally:
        if 'conn' in locals():
            conn.close()
