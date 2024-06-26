export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    number_page_pagination?: number;
    path_module: string,
    delete_action: string,
    udpate_action: string
};
