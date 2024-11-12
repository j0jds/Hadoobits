# deixei esse cara aqui por desleixo mesmo, use o esqueleto.py pra fazer novos arquivos de análise de dados
#dsad
import sqlite3
import pandas as pd
import os

db_file = 'database.db'

# Checa se o vulgo existe
if not os.path.exists(db_file):
    print(f"O arquivo {db_file} nãp existe.")
else:
    try:
        # Confirmação da conexão com a base de dados
        conn = sqlite3.connect(db_file)
        print("Conexão suave!.")

        
        membros_df = pd.read_sql_query("SELECT id, nome FROM membros;", conn)
        tarefa_df = pd.read_sql_query("SELECT id, nome, prioridade, usuario_id FROM tarefa;", conn)

        print("Membros DataFrame:")
        print(membros_df.head())
        
        print("\nTarefa DataFrame:")
        print(tarefa_df.head())

        merged_df = pd.merge(tarefa_df, membros_df, left_on='usuario_id', right_on='id', how='inner')
        print("\nMerged DataFrame:")
        print(merged_df.head())

        # Placeholder pra adicionar toda a análise em um só arquivo, acho uma porqueira fazer isso mas tá aí seja feliz

    except sqlite3.Error as e:
        print(f"Deu erro aqui: {e}")

    finally:
        if 'conn' in locals():
            conn.close()
