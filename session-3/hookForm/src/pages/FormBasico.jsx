import { useForm } from 'react-hook-form';

function FormBasico() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const manejarSubmit = (data) => {
    console.log(data);
  };

  console.log(watch('primerNombre'));

  return (
    <>
      <form onSubmit={handleSubmit(manejarSubmit)}>
        <input
          type="text"
          placeholder="Escribe tu nombre"
          {...register('primerNombre', {
            required: 'Este campo es obligatorio',
            maxLength: {
              value: 5,
              message: 'La longitud maxima es de 5 caracteres',
            },
          })}
          aria-invalid={errors.primerNombre ? 'true' : 'false'}
        />
        {errors?.primerNombre?.type === 'required' && (
          <p role="alert">{errors.primerNombre.message}</p>
        )}
        <select {...register('gender')}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default FormBasico;
