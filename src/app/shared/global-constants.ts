export class GlobalConstants{

    //Mensaje
    public static genericError: string = "Algo ha ido mal. Por favor, intentelo más tarde.";

    public static unauthorized:string = "Tu usuario no está autorizado para acceder a esta página."

    public static productExistsError:string = "Este producto ya existe";

    public static productAdded: string = "producto añadido";

    //Registro
    public static nameRegex:string = "[a-zA-Z0-9]*";

    public static emailRegex:string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

    public static contactNumberRegex:string = "^[e0-9]{9,9}$";

    //Variable
    public static error:string = "error";
}