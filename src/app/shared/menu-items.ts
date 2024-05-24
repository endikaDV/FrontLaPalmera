import { Injectable } from "@angular/core";

export interface Menu {
    state: string;
    name: string;
    type: string;
    icon: string;
    role: string;
}

const MENUITEMS = [
    { state: 'dashboard', name: 'Panel de Control', type: 'link', icon: 'dashboard', role: '' },
    { state: 'category', name: 'Gestionar Categorias', type: 'link', icon: 'category', role: 'admin' },
    { state: 'product', name: 'Gestionar Productos', type: 'link', icon: 'inventory_2', role: 'admin' },
    { state: 'order', name: 'Gestionar Pedidos', type: 'link', icon: 'shopping_cart', role: '' },
    { state: 'bill', name: 'Ver Facturas', type: 'link', icon: 'backup_table', role: '' },
    { state: 'user', name: 'Gestionar Usuarios', type: 'link', icon: 'people', role: 'admin'}
]

@Injectable()
export class MenuItems {
    getMenuitem(): Menu[] {
        return MENUITEMS;
    }
}