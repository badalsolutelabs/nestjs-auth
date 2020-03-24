
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum UserRoles {
    ADMIN = "ADMIN",
    STUDENT = "STUDENT"
}

export class LoginInput {
    email: string;
    password: string;
}

export class PostInput {
    title: string;
    body?: string;
}

export class SignUpInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: UserRoles;
}

export class AuthPayLoad {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
}

export abstract class IMutation {
    abstract signUp(signUpInput?: SignUpInput): AuthPayLoad | Promise<AuthPayLoad>;

    abstract login(loginInput?: LoginInput): AuthPayLoad | Promise<AuthPayLoad>;

    abstract createPost(postInput?: PostInput): Post | Promise<Post>;
}

export class Post {
    id: string;
    title: string;
    body?: string;
    author: User;
}

export abstract class IQuery {
    abstract post(id: string): Post | Promise<Post>;

    abstract posts(): Post[] | Promise<Post[]>;

    abstract user(id: string): User | Promise<User>;

    abstract me(): User | Promise<User>;
}

export class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    post: Post[];
    createdAt: string;
    role: UserRoles;
}
