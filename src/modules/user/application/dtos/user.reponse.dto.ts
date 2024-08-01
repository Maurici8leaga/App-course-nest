import { Exclude, Expose, plainToInstance } from 'class-transformer'; // esto viene de aca https://github.com/typestack/class-transformer#readme
import { User } from '../../domain/roots/user';

class RoleResponse {
  id: string;
}

//  se crean estos class aparte para separar las estructuras

class AddressResponse {
  city: string;
  number: number;
  street: string;
  country: string;
}

export class UserResponse {
  @Expose()
  //   @Expose es para exponer la propiedad en el plano, sin esto no se muestra la propiedad en el resultado final
  id: string;

  @Expose()
  fullname: string;

  @Expose()
  email: string;

  @Expose()
  image: string;

  @Expose()
  roles: RoleResponse[];

  @Expose()
  address: AddressResponse;

  @Exclude()
  // Excluye el valor del objeto en la respuesta final, (puede usarse como metodo de seguridad)
  password: string;
}

// dto de response: como deberia devolver la salida de respuesta al user
export class UserResponseDTO {
  static fromDomainToResponse(
    data: User | User[],
  ): UserResponse | UserResponse[] {
    if (Array.isArray(data)) {
      return data.map((user) => {
        const properties = user.properties();
        properties.address = Object.assign({}, user.properties().address);
        return plainToInstance(UserResponse, properties, {
          excludeExtraneousValues: true,
        });
      });
    }
    const properties = data.properties();
    properties.address = Object.assign({}, data.properties().address);
    return plainToInstance(UserResponse, properties, {
      // "plainToInstance" Este método transforma el objeto de su clase en una nueva instancia del objeto de clase
      excludeExtraneousValues: true,
      //   "excludeExtraneousValuesƒ" ayuda a excluir las propiedades que no tenga el decorador @Expose o que tenga el decorador @Exclude
    });
  }
}
