import imgSearch from "../../assets/img/img-lupa.svg";

export const TextFieldSearch = (props) => {
  const { value, onChange } = props;
  return (
    <div className="border w-10/12 lg:w-1/2 flex items-center bg-white outline-none mx-auto h-12 rounded-lg border-r-0">
      <img src={imgSearch} alt="Buscar" />
      <input
        value={value}
        onChange={onChange}
        placeholder="Escribe el nombre de la ciudad que quieres consultar"
        className="w-full bg-transparent outline-none text-md h-10 border-0 focus:outline-none input-search px-2"
      />
      <button className="w-32 h-full rounded-lg bg-green-400 border-none text-white font-bold">
        Buscar
      </button>
    </div>
  );
};
