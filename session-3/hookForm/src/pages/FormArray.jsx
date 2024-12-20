import { useForm, useFieldArray } from "react-hook-form"

function FormArray() {
  const {
    register, 
    handleSubmit,
    formState: {errors},
    control
  } = useForm()

  const {fields, append, remove} = useFieldArray({
    control,
    name: "campos",
  })

  const onSubmit = data => console.log(data)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <button onClick={() => append({value: ""})} >Añadir campo</button>
        {fields.map((element, index) => {
          return (
            <div key={crypto.randomUUID}>
              <input type="text"  {...register(`campos.${index}.value`)} />
              <button onClick={() => remove(index)} >Remover campo</button>
            </div>
          )
        })}
        <input type="submit" />
      </form>
    </>
  )
}

export default FormArray