import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { LOAD, CREATE, DELETE, EDIT, GETBYID, ProductState } from './product.reducer';

@Injectable()
export class ProductService {

    dataLists$: Observable<any>;
    dataList$: Observable<any>;
    private getPostsURI = 'https://scottwww.nctu.me/datas'

    constructor(private store: Store<ProductState>,
        private http: Http) {
        this.dataLists$ = store.select<any>('product').map(state => state.dataLists);
        this.dataList$ = store.select<any>('product').map(state => state.dataList);
    }

    getPosts(): Observable<any> {
        return this.http.get(this.getPostsURI)
            .map((response: Response) => response.json());
    }

    load(dataLists) {
        this.store.dispatch({
            type: LOAD,
            payload: dataLists
        });
    }

    createAPI(dataList): Observable<any> {
        return this.http.post(this.getPostsURI, dataList)
            .map((response: Response) => response.json());
    }

    create(dataList) {
        this.store.dispatch({
            type: CREATE,
            payload: dataList
        });
    }


    deleteAPI(id): Observable<any> {
        return this.http.delete(this.getPostsURI + "/" + id)
            .map((response: Response) => response);
    }

    delete(id) {
        this.store.dispatch({
            type: DELETE,
            payload: id
        });
    }

    getByIdAPI(id): Observable<any> {
        return this.http.get(this.getPostsURI + "/" + id)
            .map((response: Response) => response);
    }

    getById(id) {
        this.store.dispatch({
            type: GETBYID,
            payload: id
        })
    }



    editAPI(id, dataList): Observable<any> {
        return this.http.put(this.getPostsURI + "/" + id, dataList)
            .map((response: Response) => response);
    }

    edit(data) {
        this.store.dispatch({
            type: EDIT,
            payload: data
        });
     
    }





}