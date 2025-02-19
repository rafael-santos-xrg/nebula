export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-evenly h-3/5 border-2 w-2/3 rounded-2xl border-opacity-50 border-white">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="text-5xl">
            Bem-vindo ao <strong className="text-primary">Nebula</strong>
          </p>
        </div>
        <form action="/" className="flex flex-col gap-4">
          <input type="email" name="email" placeholder="Email" className="border-2 rounded-2xl px-3 h-10 text-textColorBlack" required />
          <input type="password" name="password" placeholder="Senha" className="border-2 rounded-2xl px-3 h-10 text-textColorBlack" required />
          <button type="submit" className="rounded-2xl bg-secondary hover:bg-primary duration-300 h-10 w-fit px-6 flex self-center justify-center items-center">
            Entrar
          </button>
        </form>
        <div>
          <p className="text-white text-sm">
            Não possui uma conta?{" "}
            <a href="/" className="text-primary">
              Cadastre-se
            </a>{" "}
            aqui.
          </p>
        </div>
      </div>
    </>
  );
}
