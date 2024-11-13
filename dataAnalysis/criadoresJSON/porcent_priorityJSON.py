import sqlite3
import pandas as pd
import os
import json

db_file = 'database.db'
output_dir = 'criadoresJSON/OutputJSON'
output_file = os.path.join(output_dir, 'porcent_priority.json')  

if not os.path.exists(db_file):
    print(f"Arquivo {db_file} não existe.")
else:
    try:
        conn = sqlite3.connect(db_file)
        print("Conexão sucedida.")

        tarefa_df = pd.read_sql_query("SELECT prioridade FROM tarefa limit 10;", conn)

        total_tasks = tarefa_df.shape[0]

        priority_counts = tarefa_df['prioridade'].value_counts().reset_index()
        priority_counts.columns = ['prioridade', 'num_tarefas']

        priority_counts['porcentagem'] = (priority_counts['num_tarefas'] / total_tasks) * 100

        print("\nPorcentagem de Tarefas por Prioridade:")
        priority_counts.index = range(1, len(priority_counts) + 1)
        print(priority_counts[['prioridade', 'num_tarefas', 'porcentagem']])

        # Organizando os dados no formato JSON
        result = {
            "total_tasks": total_tasks,
            "priority_distribution": priority_counts.to_dict(orient='records')
        }

        # Verificando se o diretório criadoresJSON/OutputJSON existe, caso contrário, criando-o
        if not os.path.exists(output_dir):
            os.makedirs(output_dir)

        # Criando o arquivo JSON e escrevendo os dados
        with open(output_file, 'w', encoding='utf-8') as json_file:
            json.dump(result, json_file, indent=4, ensure_ascii=False)

        print(f"Arquivo JSON gerado com sucesso em {output_file}.")

    except sqlite3.Error as e:
        print(f"Ocorreu um erro: {e}")

    finally:
        if 'conn' in locals():
            conn.close()
