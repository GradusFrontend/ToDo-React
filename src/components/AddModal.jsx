import { data } from "autoprefixer";
import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { HttpRequest } from "../hooks/http.request";

const AddModal = forwardRef(function AddModal(props, ref) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { loading, error, request } = HttpRequest()

    const onSubmit = (data) => {

        request('/todos', 'post', data)
            .then(res => {
                location.reload()
            })
    };

    return (

        <dialog ref={ref} className="fade fixed py-10 px-16 border-0 rounded-2xl" id="modalAdd">
            <div className="modal">
                <button
                    type="button"
                    onClick={() => ref.current.close()}
                    className="crossAdd">
                    <IoClose size={24} />
                </button>
                <h1>Добавить</h1>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    name="addTaskForm">
                    <input {...register('title', { required: true })} className={`${errors.title ? '!outline-red-500 !border-red-500' : ''}`} placeholder="Загаловок" type="text" />
                    <input {...register('description', { required: true })} className={`${errors.description ? '!outline-red-500 !border-red-500' : ''}`} placeholder="Описание" type="text" />
                    <input {...register('time', { required: true })} className={`${errors.time ? '!outline-red-500 !border-red-500' : ''}`} placeholder="Время" type="time" />
                    <input {...register('date', { required: true })} className={`${errors.date ? '!outline-red-500 !border-red-500' : ''}`} placeholder="Дата" type="date" />
                    <select {...register('status')}>
                        <option value="new">Не завершено</option>
                        <option value="inProcess">В процессе</option>
                        <option value="completed">Завершено</option>
                    </select>
                    <button
                        type="submit"
                    >Добавить</button>
                </form>
            </div>
        </dialog>
    );
})

export default AddModal;