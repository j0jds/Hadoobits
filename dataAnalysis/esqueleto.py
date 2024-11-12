# só copiar esse arquivo para outro e construir a partir do placeholder

import sqlite3
import pandas as pd
import os

db_file = 'database.db'

if not os.path.exists(db_file):
    print(f"Arquivo {db_file} não existe.")
else:
    try:
        conn = sqlite3.connect(db_file)
        print("Conexãp sucedida.")

        # Eu sou um placeholder útil

    except sqlite3.Error as e:
        print(f"Ocorreu um erro: {e}")

    finally:
        if 'conn' in locals():
            conn.close()