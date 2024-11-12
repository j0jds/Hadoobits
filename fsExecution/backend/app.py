from flask import Flask, render_template, request, redirect, url_for, g, flash
import sqlite3
from flask_login import LoginManager, UserMixin, login_user, logout_user, login_required, current_user
import random
from faker import Faker

app = Flask(__name__, template_folder='templates', static_url_path='/static')
app.config['DATABASE'] = 'backend/database.db'
app.config['SECRET_KEY'] = 'cookiesecreto'

login_manager = LoginManager()
login_manager.init_app(app)

# --------------------------------------------------- #

fake = Faker()

patterns = {
    'astronomia': [
        'observar as estrelas',
        'participar de um clube de astronomia',
        'assistir a documentários sobre espaço',
        'realizar observações astronômicas',
        'estudar constelações',
        'participar de eventos de observação do céu',
        'explorar a astrofísica',
        'ler livros sobre exploração espacial',
        'realizar um diário de observação',
        'explorar a história da astronomia'
    ],
    'sustentabilidade': [
        'praticar reciclagem em casa',
        'participar de projetos comunitários de sustentabilidade',
        'explorar técnicas de vida sustentável',
        'fazer um diário sobre hábitos sustentáveis',
        'assistir a palestras sobre meio ambiente',
        'realizar um projeto de redução de desperdício',
        'participar de oficinas de compostagem',
        'explorar a permacultura',
        'fazer um planejamento de consumo consciente',
        'ler livros sobre ecologia'
    ],
    'moda': [
        'explorar tendências de moda',
        'participar de workshops de design de moda',
        'fazer um diário de estilo pessoal',
        'assistir a desfiles de moda',
        'criar um lookbook',
        'experimentar técnicas de costura',
        'ler livros sobre a história da moda',
        'explorar a moda sustentável',
        'fazer um projeto de upcycling de roupas',
        'participar de grupos de troca de roupas'
    ],
    'culinária_internacional': [
        'explorar a culinária de diferentes países',
        'fazer uma noite de comida temática',
        'participar de aulas de culinária internacional',
        'experimentar receitas de diversos continentes',
        'realizar um diário gastronômico',
        'ler livros sobre culturas culinárias',
        'assistir a documentários sobre comida',
        'fazer um projeto de intercâmbio culinário',
        'explorar a história da gastronomia',
        'fazer um curso de culinária regional'
    ],
    'saúde_mental': [
        'praticar técnicas de autocuidado',
        'participar de grupos de apoio',
        'explorar a terapia como ferramenta',
        'fazer um diário de gratidão',
        'assistir a palestras sobre saúde mental',
        'ler livros sobre desenvolvimento pessoal',
        'realizar meditação diariamente',
        'explorar práticas de mindfulness',
        'fazer um planejamento de autocuidado',
        'participar de workshops sobre resiliência'
    ],
    'empreendedorismo': [
        'desenvolver um plano de negócios',
        'participar de workshops de empreendedorismo',
        'explorar o marketing para pequenas empresas',
        'fazer um estudo de caso de um empreendedor famoso',
        'assistir a palestras sobre startups',
        'realizar networking com empreendedores',
        'fazer um diário de progresso do negócio',
        'explorar inovações em diferentes setores',
        'participar de competições de pitch',
        'ler livros sobre mentalidade empreendedora'
    ],
    'filmes': [
        'assistir a clássicos do cinema',
        'participar de um clube de cinema',
        'explorar a história do cinema',
        'fazer críticas de filmes assistidos',
        'assistir a documentários sobre cinema',
        'realizar um projeto de análise de filmes',
        'experimentar fazer curtas-metragens',
        'ler livros sobre a produção cinematográfica',
        'participar de festivais de cinema',
        'explorar diferentes gêneros cinematográficos'
    ],
    'estilo_de_vida': [
        'explorar o minimalismo',
        'fazer um diário de hábitos',
        'assistir a palestras sobre desenvolvimento pessoal',
        'participar de eventos sobre vida saudável',
        'realizar um planejamento de metas de vida',
        'explorar a arte da produtividade',
        'ler livros sobre autoajuda',
        'fazer um projeto de vida equilibrada',
        'explorar a filosofia do hygge',
        'participar de retiros de autoconhecimento'
    ],
    'esportes_radicais': [
        'experimentar escalada',
        'participar de um curso de mergulho',
        'fazer uma trilha em alta montanha',
        'explorar esportes de aventura',
        'assistir a competições de esportes radicais',
        'realizar um diário de atividades radicais',
        'participar de grupos de esportes radicais',
        'aprender sobre segurança em esportes de aventura',
        'experimentar surfe ou skate',
        'fazer um projeto de documentário sobre esportes radicais'
    ],
    'cultura_pop': [
        'explorar a história da cultura pop',
        'participar de eventos de cultura geek',
        'assistir a séries clássicas',
        'ler quadrinhos e graphic novels',
        'participar de convenções de fãs',
        'explorar a evolução de jogos de vídeo game',
        'fazer um diário sobre experiências de fandom',
        'assistir a documentários sobre cultura pop',
        'explorar a influência da cultura pop na sociedade',
        'participar de discussões sobre fenômenos culturais'
    ]
}

class Usuario(UserMixin):
    def __init__(self, id, nome, email, senha):
        self.id = id
        self.nome = nome
        self.email = email
        self.senha = senha

    @staticmethod
    def buscar_por_id(id):
        db = get_db()
        cursor = db.cursor()
        cursor.execute('SELECT * FROM membros WHERE id = ?', (id,))
        usuario_data = cursor.fetchone()
        cursor.close()
        if not usuario_data:
            return None
        id, nome, email, senha = usuario_data
        return Usuario(id=id, nome=nome, email=email, senha=senha)

    @staticmethod
    def buscar_por_email(email):
        db = get_db()
        cursor = db.cursor()
        cursor.execute('SELECT * FROM membros WHERE email = ?', (email,))
        usuario_data = cursor.fetchone()
        cursor.close()
        if not usuario_data:
            return None
        id, nome, email, senha = usuario_data
        return Usuario(id=id, nome=nome, email=email, senha=senha)

@login_manager.user_loader
def load_user(user_id):
    return Usuario.buscar_por_id(user_id)

@login_manager.request_loader
def load_user_from_request(request):
    email = request.form.get('email')
    if email:
        usuario = Usuario.buscar_por_email(email)
        if usuario:
            return usuario
    return None

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(app.config['DATABASE'])
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()
        
# --------------------------------------------------- #

def generate_task_title():
    pattern = random.choice(list(patterns.keys()))
    title_variation = random.choice(patterns[pattern])
    return title_variation, pattern

def insert_fake_tasks(batch_size, total_records):
    try:
        db = get_db()
        cursor = db.cursor()
        for _ in range(0, total_records, batch_size):
            data_batch = []
            for _ in range(batch_size):
                usuario_id = random.randint(1, 100000)
                title, pattern = generate_task_title()
                descricao = fake.text(max_nb_chars=200)
                prioridade = random.choice(['Alta', 'Média', 'Baixa'])
                data_batch.append((title, descricao, prioridade, usuario_id))
            cursor.executemany('INSERT INTO tarefa (nome, descricao, prioridade, usuario_id) VALUES (?, ?, ?, ?)', data_batch)
            db.commit()
        cursor.close()
    except sqlite3.Error as e:
        print(f"Erro no banco de dados: {e}")

def insert_fake_users(batch_size, total_records):
    try:
        db = get_db()
        cursor = db.cursor()
        email_set = set()
        for _ in range(0, total_records, batch_size):
            data_batch = []
            for _ in range(batch_size):
                nome = fake.name()
                email = fake.email()
                while email in email_set:
                    email = fake.email()
                email_set.add(email)
                senha = fake.password()
                data_batch.append((nome, email, senha))
            cursor.executemany('INSERT INTO membros (nome, email, senha) VALUES (?, ?, ?)', data_batch)
            db.commit()
        cursor.close()
    except sqlite3.IntegrityError as e:
        print(f"Erro de integridade: {e}")
        flash('Erro ao injetar dados: violação de integridade.', 'error')

@app.route("/injetar_dados")
def injetar_dados():
    total_records = 100000
    batch_size = 1000
    insert_fake_users(batch_size, total_records)
    return redirect(url_for('home'))

@app.route("/inserir_tarefas", methods=['POST'])
@login_required
def inserir_tarefas():
    total_tarefas = 1000000
    batch_size = 1000
    insert_fake_tasks(batch_size, total_tarefas)
    return redirect(url_for('minhastarefas'))

# --------------------------------------------------- #

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/cadastro", methods=['GET', 'POST'])
def cadastro():
    if request.method == 'POST':
        nome = request.form['nome']
        email = request.form['email']
        senha = request.form['senha']
        db = get_db()
        cursor = db.cursor()
        cursor.execute('SELECT * FROM membros WHERE email = ?', (email,))
        existing_user = cursor.fetchone()
        if existing_user:
            flash('Email já cadastrado. Por favor, tente outro email.', 'cadastro_error')
            return redirect(url_for('cadastro'))
        else:
            cursor.execute('INSERT INTO membros (nome, email, senha) VALUES (?, ?, ?)', (nome, email, senha))
            db.commit()
            cursor.close()
            cursor = db.cursor()
            cursor.execute('SELECT * FROM membros WHERE email = ?', (email,))
            user = cursor.fetchone()
            cursor.close()
            if user:
                usuario = Usuario(user[0], nome, email, senha)
                login_user(usuario)
                return redirect(url_for('usuarioentrou'))
    return render_template("cadastro.html")

@app.route("/login", methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        senha = request.form['senha']
        db = get_db()
        cursor = db.cursor()
        cursor.execute('SELECT * FROM membros WHERE email = ? AND senha = ?', (email, senha))
        user = cursor.fetchone()
        if user:
            usuario = Usuario(user[0], user[1], user[2], user[3])
            login_user(usuario)
            flash('Login realizado com sucesso!', 'login_success')
            return redirect(url_for('usuarioentrou'))
        else:
            flash('Email ou senha incorretos. Por favor, tente novamente.', 'login_error')
        cursor.close()
    return render_template("login.html")

@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for('home'))

@app.route("/usuarioentrou")
@login_required
def usuarioentrou():
    return render_template("usuarioentrou.html", nome=current_user.nome)

@app.route("/novatarefa", methods=['GET', 'POST'])
@login_required
def novatarefa():
    if request.method == 'POST':
        nome = request.form['nome']
        descricao = request.form['descricao']
        prioridade = request.form['prioridade']
        usuario_id = current_user.id
        db = get_db()
        cursor = db.cursor()
        cursor.execute('SELECT id FROM tarefa WHERE nome = ? AND usuario_id = ?', (nome, usuario_id))
        existing_task = cursor.fetchone()
        if existing_task:
            flash('Nome de tarefa já usado para este usuário.', 'tarefa_error')
            return redirect(url_for('novatarefa'))
        cursor.execute('INSERT INTO tarefa (nome, descricao, prioridade, usuario_id) VALUES (?, ?, ?, ?)', (nome, descricao, prioridade, usuario_id))
        db.commit()
        cursor.close()
        return redirect(url_for('minhastarefas'))
    return render_template("novatarefa.html")

@app.route("/minhastarefas")
@login_required
def minhastarefas():
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT * FROM tarefa WHERE usuario_id = ?', (current_user.id,))
    tarefas = cursor.fetchall()
    cursor.close()
    return render_template("minhastarefas.html", tarefas=tarefas)

@app.route("/editartarefas/<int:tarefa_id>", methods=['GET', 'POST'])
@login_required
def editartarefas(tarefa_id):
    db = get_db()
    cursor = db.cursor()
    if request.method == 'POST':
        nome = request.form['nome']
        descricao = request.form['descricao']
        prioridade = request.form['prioridade']
        cursor.execute('UPDATE tarefa SET nome = ?, descricao = ?, prioridade = ? WHERE id = ? AND usuario_id = ?', (nome, descricao, prioridade, tarefa_id, current_user.id))
        db.commit()
        cursor.close()
        return redirect(url_for('minhastarefas'))
    else:
        cursor.execute('SELECT * FROM tarefa WHERE id = ? AND usuario_id = ?', (tarefa_id, current_user.id))
        tarefa = cursor.fetchone()
        cursor.close()
        if tarefa:
            return render_template("editartarefas.html", tarefa=tarefa)
        else:
            return redirect(url_for('minhastarefas'))

@app.route("/excluir_tarefa/<int:tarefa_id>", methods=['POST'])  
@login_required
def excluir_tarefa(tarefa_id):
    db = get_db()
    cursor = db.cursor()
    cursor.execute('DELETE FROM tarefa WHERE id = ? AND usuario_id = ?', (tarefa_id, current_user.id))
    db.commit()
    cursor.close()
    flash('Tarefa excluída com sucesso.', 'tarefa_excluida')  
    return redirect(url_for('minhastarefas'))


@app.route("/excluirusuario", methods=['GET', 'POST'])

@login_required

def excluirusuario():

    if request.method == 'POST':
        nome = request.form['nome']
        email = request.form['email']
        senha = request.form['senha']
        db = get_db()
        cursor = db.cursor()
        cursor.execute('SELECT * FROM membros WHERE nome = ? AND email = ? AND senha = ?', (nome, email, senha))
        user = cursor.fetchone()
        if user:
            cursor.execute('DELETE FROM membros WHERE id = ?', (user[0],))
            db.commit()
            cursor.close()
            logout_user()
            flash('Conta excluída com sucesso!', 'excluirusuario_success')
            return redirect(url_for('home'))
        else:
            flash('Informações incorretas. Por favor, tente novamente.', 'excluirusuario_error')
            cursor.close()

    return render_template("excluirusuario.html")


if __name__ == "__main__":
    app.run(debug=True)
