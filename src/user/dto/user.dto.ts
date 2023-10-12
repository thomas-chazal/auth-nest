// Importe les décorateurs `IsString` et `IsEmail` du module 'class-validator'.
// Ces décorateurs permettent d'appliquer des contraintes de validation sur les propriétés des classes.
import { IsString, IsEmail } from 'class-validator';

// Déclare une classe `CreateUserDto` qui servira à définir la structure et la validation des données pour la création d'un utilisateur.
export class CreateUserDto {
  // Utilise le décorateur `@IsString()` pour s'assurer que la propriété `name` est toujours une chaîne de caractères lors de la validation.
  @IsString()
  name: string;

  // Utilise le décorateur `@IsEmail()` pour s'assurer que la propriété `email` est une adresse e-mail valide lors de la validation.
  @IsEmail()
  email: string;

  // Utilise le décorateur `@IsString()` pour s'assurer que la propriété `password` est toujours une chaîne de caractères lors de la validation.
  @IsString()
  password: string;
}
