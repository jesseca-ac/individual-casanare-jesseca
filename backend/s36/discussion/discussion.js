// MongoDB Aggregation is used to generate manipulated data and perform operations to create filtered results
// Compared to doing CRUD on data, aggregations gives us access to manipulate data, filter, compute without having to create a frontend application

// AGGREGATE METHODS
// $match is used to pass the documents to meet specified conditions to the next pipeline
// syntax { $match: { field: value } }

// $group is used to group elements together
// syntax { $group: { _id: "value", fieldResult: "valueResult" } }


db.colltionName.aggregate([
    { $match: { fieldA, valueA } },
    { $group: { _id: "$fieldB" }, { result: { operation } } }
])


// $ symbol will refer to a field name that is available in the documents being aggregated

db.fruits.aggregate([
    { $match: { onSale: true } },
    { $group: { _id: "$supplier_id", total: { $sum: "stock" } } }
]);

// $project can be used to include/exclude fields from returned results


db.fruits.aggregate([
    { $match: { onSale: true },
    { $group: { id: "$supplier_id", total: { $sum: "$stock" } } },
    { $project: { _id: 0 } } }
])



// $sort can change the order of aggregated result
// -1 sort order will reverse the order

db. fruits.aggregate([
    { Smatch: { onSale: true} },
    { $group: {_id: "$supplier id", total: { $sum: "$stock" } } }.
    { $sort: { total: -1 } }
]);

// $unwind deconstructs an array field from a collection/field with an array value to output a result for each element

db.fruits.aggregate([
    { $unwind: "$origin" }
]);

// if you have a document that pass through the pipeline, it contributes to a value of 1 to the total sum
db.fruits.aggregate([
    { $unwind: "$origin" },
    { $group: { _id: "$origin", kinds: { $sum: 1 } } }
]);

