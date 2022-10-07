import { useNavigate  } from "react-router-dom";

const Register = () =>{
    const navigate = useNavigate()

    return(
        <div className="bg-white h-screen">
            <div className=" flex justify-center pt-44 ">
                <div className="card w-96 h-96 bg-slate-400 shadow-xl grid justify-items-center ">
                    <div className="text-center pt-10">
                        <h1 className="font-bold font-sans text-red-600">REGISTER</h1>
                    </div>
                    <div className="card-body items-center ">
                        <input placeholder="Email"/>
                        <input placeholder="UserName"/> 
                        <input placeholder="Password"/>
                        <div className="card-actions mt-3">
                            <button className="btn btn-ghost bg-red-600 text-white" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex flex-row justify-center gap-44 ">
                <button className="text-black hover:text-red-400" onClick={() => navigate('/')}>Back</button>
                <p className="text-black cursor-pointer hover:text-red-400" onClick={() => navigate('/login')}>sudah punya akun?</p>
            </div>
        </div>
        
    )
}

export default Register