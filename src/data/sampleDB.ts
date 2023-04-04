export interface MegaSearchResult {
    displayHeading: string;
    displayDescription: string;
    icon: string;
    resultType: string;
  }
  
    export let searchResult = [{
    displayHeading:'Order1',
    displayDescription:'Order 1 details',
    icon: 'https://raw.githubusercontent.com/MSubbarayuduHAFHUK/icons/main/orders.PNG',
    resultType:'orders',
    isRecent:true
}, {
    displayHeading:'Invoice1',
    displayDescription:'Invoice 1 details',
    icon: 'https://raw.githubusercontent.com/MSubbarayuduHAFHUK/icons/main/invoices.PNG',
    resultType:'invoices',
    isRecent:true
}, {
    displayHeading:'Product1',
    displayDescription:'Product 1 details',
    icon: 'https://raw.githubusercontent.com/MSubbarayuduHAFHUK/icons/main/products.PNG',
    resultType:'products',
    isRecent:false
}, {
    displayHeading:'Order2',
    displayDescription:'Order 2 details',
    icon: 'https://raw.githubusercontent.com/MSubbarayuduHAFHUK/icons/main/orders.PNG',
    resultType:'orders',
    isRecent:true
}, {
    displayHeading:'Product2',
    displayDescription:'Product 2 details',
    icon: 'https://raw.githubusercontent.com/MSubbarayuduHAFHUK/icons/main/products.PNG',
    resultType:'products',
    isRecent:false
}];