import { useForm } from "react-hook-form";

const  NewCard = () => {
    
    
    const {register, handleSubmit, formState: {errors}}=useForm();
    const onSubmit = (data) => {
        console.log(data)
        
      }
    return (
        <>
        <h1>Formulario De creacion de targeta</h1>
    <div className="Contenedor">
      <h1>Formularios</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='password'
            placeholder="Contraseña"
            {...register(
              'password',
              
            )}
          />
          <p>{errors.username?.message}</p>
          <button type='submit'>Enviar</button>

          
      </form>
      
    </div>
        </>
    );
};
export default NewCard;