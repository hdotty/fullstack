# ApiDocumentation.BookControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBookUsingPOST**](BookControllerApi.md#addBookUsingPOST) | **POST** /books | addBook
[**deleteBookUsingDELETE**](BookControllerApi.md#deleteBookUsingDELETE) | **DELETE** /books/{id} | deleteBook
[**findBooksByCategoryUsingGET**](BookControllerApi.md#findBooksByCategoryUsingGET) | **GET** /books/category | findBooksByCategory
[**findBooksUsingGET**](BookControllerApi.md#findBooksUsingGET) | **GET** /books/search | findBooks
[**findByPersonIdIsNotNullUsingGET**](BookControllerApi.md#findByPersonIdIsNotNullUsingGET) | **GET** /books/borrowed | findByPersonIdIsNotNull
[**getBookUsingGET**](BookControllerApi.md#getBookUsingGET) | **GET** /books/{id} | getBook
[**getBooksUsingGET**](BookControllerApi.md#getBooksUsingGET) | **GET** /books | getBooks
[**updateBookUsingPUT**](BookControllerApi.md#updateBookUsingPUT) | **PUT** /books | updateBook



## addBookUsingPOST

> addBookUsingPOST(book)

addBook

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BookControllerApi();
let book = new ApiDocumentation.BookDto(); // BookDto | book
apiInstance.addBookUsingPOST(book, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **book** | [**BookDto**](BookDto.md)| book | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deleteBookUsingDELETE

> deleteBookUsingDELETE(id)

deleteBook

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BookControllerApi();
let id = 789; // Number | id
apiInstance.deleteBookUsingDELETE(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## findBooksByCategoryUsingGET

> [BookDto] findBooksByCategoryUsingGET(opts)

findBooksByCategory

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BookControllerApi();
let opts = {
  'category': "category_example" // String | category
};
apiInstance.findBooksByCategoryUsingGET(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **String**| category | [optional] 

### Return type

[**[BookDto]**](BookDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## findBooksUsingGET

> [BookDto] findBooksUsingGET(query)

findBooks

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BookControllerApi();
let query = "query_example"; // String | query
apiInstance.findBooksUsingGET(query, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **String**| query | 

### Return type

[**[BookDto]**](BookDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## findByPersonIdIsNotNullUsingGET

> [BookDto] findByPersonIdIsNotNullUsingGET()

findByPersonIdIsNotNull

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BookControllerApi();
apiInstance.findByPersonIdIsNotNullUsingGET((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[BookDto]**](BookDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getBookUsingGET

> BookDto getBookUsingGET(id)

getBook

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BookControllerApi();
let id = 789; // Number | id
apiInstance.getBookUsingGET(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**| id | 

### Return type

[**BookDto**](BookDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getBooksUsingGET

> [BookDto] getBooksUsingGET()

getBooks

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BookControllerApi();
apiInstance.getBooksUsingGET((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[BookDto]**](BookDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## updateBookUsingPUT

> updateBookUsingPUT(bookDto, opts)

updateBook

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BookControllerApi();
let bookDto = new ApiDocumentation.BookDto(); // BookDto | bookDto
let opts = {
  'author': "author_example", // String | author
  'category': "category_example", // String | category
  'title': "title_example" // String | title
};
apiInstance.updateBookUsingPUT(bookDto, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookDto** | [**BookDto**](BookDto.md)| bookDto | 
 **author** | **String**| author | [optional] 
 **category** | **String**| category | [optional] 
 **title** | **String**| title | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

