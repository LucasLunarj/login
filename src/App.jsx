import 'global.css'

export function App(){
  return(
    <div className='h-screen p-5 bg-slate-800 align-middle '>
     <div className="flex-col border items-end">
       <h1 className="from-neutral-100 text-slate-100 text-lg te ">Sistema de Login</h1>
           <div>
        <div>
          <label htmlFor="">Endereço de Email</label>
          <input className="bg-slate-700 rounded-md w-1/3 h-8" type="email" name="" id="" />
          </div>
          <div className="flex-col">
            <label htmlFor="">Senha</label>
            <input className="bg-slate-700 rounded-md w-1/3 h-8" type="password" name="" id="" />
          </div>
           </div>
           <button>Entrar</button>
           <p>não é membro?<a className="text-yellow-400" href="#">Faça seu login agora</a></p>
     </div>
    </div>
  )
}
