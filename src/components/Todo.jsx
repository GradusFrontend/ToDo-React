import { HttpRequest } from "../hooks/http.request";


function Todo({ name, desc, date, time, status, id }) {
    const { loading, error, request } = HttpRequest()

    return (
        <div
            onDoubleClick={(e) => {
                request(`/todos/${id}`, 'delete')
                    .then(() => location.reload())
            }}
            className="bg-white rounded-xl border border-[#D8D8D8] p-6 flex flex-col gap-3">
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-sm text-[#A5A5B4] font-semibold max-h-[4lh] overflow-y-scroll no-scrollbar">{desc}</p>
            <div className="flex gap-2.5 font-semibold">
                <span>{date}</span>
                <span>{time}</span>
            </div>

            {
                status === 'completed' ? (<span className="font-semibold">Готово</span>) : status === 'inProcess' ? (<span className="font-semibold text-[#007FFF]">В процессе</span>) : (<span className="font-semibold text-[#FF3F3F]">Не выполнено</span>)
            }
        </div>
    );
}

export default Todo;