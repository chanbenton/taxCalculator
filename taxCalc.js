var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) { 
  var newSales = calculateSales(salesData);
  finalTotal = {}; 

  for (i in newSales){
    var companyName = newSales[i].name;
    var province = newSales[i].province;
    var sales = newSales[i].sales;
    if (!finalTotal[companyName]){
      finalTotal[companyName] = {'totalSales': 0, 'totalTaxes': 0
      };  
    }
    finalTotal[companyName].totalSales += sales;
    finalTotal[companyName].totalTaxes += sales*(salesTaxRates[province]);
  }
  return finalTotal;
}

function calculateSales(salesData){
  for (each in salesData) { 
    var company = salesData[each];
    var companyName = salesData[each]['name'];
    var sum = 0;
    for (i in company['sales']){
      sum += company['sales'][i];
    }
    company['sales'] = sum;
  }  
  return salesData;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/