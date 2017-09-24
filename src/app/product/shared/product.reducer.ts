import { ActionReducer, Action } from '@ngrx/store';
import * as _ from 'lodash';


export const LOAD = 'LOAD';
export const GETBYID = 'GETBYID';
export const CREATE = 'CREATE';
export const DELETE = 'DELETE';
export const EDIT = 'EDIT';

export interface ProductState {

    dataLists: any,
    dataList: any,

}

const initialState: ProductState = {

    dataLists: [],
    dataList: {},

}

export function ProductReducer(state: ProductState = initialState, action: Action) {

    switch (action.type) {
        case LOAD:
            return _.assign({}, state, {
                dataLists: action.payload
            });

        case CREATE:
           state.dataLists.push(action.payload);
           //新增的dataList 物件 加入 dataLists
            return _.assign({}, state, {
                dataList: action.payload
            });

        case DELETE:
            var newDataListId = action.payload;
            var dataLists = state.dataLists.filter((dataList) => dataList._id != newDataListId);
            return _.assign({}, state, {
                dataLists: dataLists
            });

        case GETBYID:
            var id = action.payload;
            var dataListFindById = _.find(state.dataLists, { _id: id });
            return _.assign({}, state, {
                dataList: dataListFindById
            });

        case EDIT:
            var data = action.payload;
            var dataListFindById = _.find(state.dataLists, { _id: data.id });
            var a = _.findIndex(state.dataLists, { _id: data.id });
            var dataLists = _.assign(state.dataLists[a], data.dataList)
            // 原ID的物件 改為EDIT過後的物件
            return _.assign({}, state, {
                dataList: dataListFindById

            });

        default:
            return state;
    }
}