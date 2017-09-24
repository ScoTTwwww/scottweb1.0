import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'filterTotal'
})

export class FilterTotalPipe implements PipeTransform {
    constructor(
    ) { }

    transform(dataLists: Array<any>, item: string): any {

        const data = [];
        _.last(_.map(dataLists, (dataList) => {

            if (_.findIndex(data, function (O) { return O.item == dataList.item; }) < 0) {

                data.push({
                    'item': dataList.item,
                    'price': dataList.price,
                    'count': 1
                })
            } else {
                var a = _.findIndex(data, { 'item': dataList.item });
                _.assign(data[a], {
                    price: _.add(data[a].price, dataList.price),
                    count: _.add(data[a].count, 1)
                });
            }
        }));

        var priceTotal = _.sumBy(data, function (o) { return o.price; });
        var countTotal = _.sumBy(data, function (o) { return o.count; });

        _.last(_.map(data, (O) => {
            var a = _.findIndex(data, { 'item': O.item });
            _.assign(data[a], {
                total: priceTotal
            });
        }));

        //rank
        _.sortBy(data, [function (o) { return o.price; }]);
        _.map(_.orderBy(data, 'price'), (O) => {
            var arraylength = _.orderBy(data, 'price').length;
            var rank =arraylength - (_.findIndex(_.orderBy(data, 'price'), { 'item': O.item })) ;
            var a = _.findIndex(data, { 'item': O.item });
            _.assign(data[a], {
                rank: rank
            });

        })
 
        if (!item) {
            data.push({
                item: "all",
                price: priceTotal,
                count: countTotal
            })
            return data
        } else {

            return _.filter(data, { item: item })
        }

    }
}
