import { NavLink } from "react-router-dom"


export const CategoriasNav = () => {

  const categoryLinks = [
    {
      id: 1,
      url: "/Categoria-Hombre",
      name: "HOMBRE"
    },

    {
      id: 2,
      url: "/Categoria-Mujer",
      name: "MUJER"
    },

    {
      id: 3,
      url: "/Categoria-Niño",
      name: "NIÑO"
    },

  ]

  return (
    <nav>
      <div className="flex mt-[20px] py-[1px] font-darker-grotesque
                       text-[15px] font-semibold md:text-[17px] gap-7 justify-center bg-black text-white">

        {categoryLinks.map((item) => (

          <NavLink
            key={item.id}
            to={item.url}
            className={({ isActive }) => {
              return (
                '' + (isActive
                  ? ' text-black scale-150  bg-[#EDEDED] px-2'
                  : '')
              );
            }} >{item.name}</NavLink>

        ))}



      </div>
    </nav>
  )
}

export default CategoriasNav