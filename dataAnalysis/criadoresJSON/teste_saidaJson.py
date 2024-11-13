import sqlite3
import pandas as pd
import json
import os

try:
    conn = sqlite3.connect('database.db')
    query = "SELECT * FROM tarefa LIMIT 10;"
    df = pd.read_sql(query, conn)

    df.rename(columns={
        'id': 'id',
        'nome': 'task',
        'descricao': 'description',
        'prioridade': 'difficulty',
    }, inplace=True)

    df = df[['id', 'task', 'description', 'difficulty']]
    df['type'] = 'Not Found'

    tasks_json = df.to_json(orient='records', indent=4, force_ascii=False)

    output_dir = os.path.join('criadoresJSON', 'OutputJSON')
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)

    output_file = os.path.join(output_dir, 'teste_saidaJSON.json')

    with open(output_file, 'w', encoding='utf-8') as json_file:
        json_file.write(tasks_json)
    
    print(f"Arquivo JSON criado em: {output_file}")

except sqlite3.Error as e:
    print(f"Erro de banco de dados: {e}")

except Exception as e:
    print(f"Erro inesperado: {e}")

finally:
    if conn:
        conn.close()
