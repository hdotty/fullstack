# ApiDocumentation.BorrowControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBorrowUsingPOST**](BorrowControllerApi.md#addBorrowUsingPOST) | **POST** /borrows | addBorrow
[**deleteAllByBookUsingDELETE**](BorrowControllerApi.md#deleteAllByBookUsingDELETE) | **DELETE** /borrows/book/{bookId} | deleteAllByBook
[**deleteAllByPersonUsingDELETE**](BorrowControllerApi.md#deleteAllByPersonUsingDELETE) | **DELETE** /borrows/person/{personId} | deleteAllByPerson
[**findAllUsingGET**](BorrowControllerApi.md#findAllUsingGET) | **GET** /borrows | findAll
[**findBorrowByBookIdUsingGET**](BorrowControllerApi.md#findBorrowByBookIdUsingGET) | **GET** /borrows/books/{bookId} | findBorrowByBookId
[**findBorrowByPersonIdUsingGET**](BorrowControllerApi.md#findBorrowByPersonIdUsingGET) | **GET** /borrows/persons/{personId} | findBorrowByPersonId
[**findBorrowByStartTimeAndEndTimeIsNotNullUsingGET**](BorrowControllerApi.md#findBorrowByStartTimeAndEndTimeIsNotNullUsingGET) | **GET** /borrows/returned | findBorrowByStartTimeAndEndTimeIsNotNull
[**findBorrowByStartTimeIsNotNullAndEndTimeIsNullUsingGET**](BorrowControllerApi.md#findBorrowByStartTimeIsNotNullAndEndTimeIsNullUsingGET) | **GET** /borrows/borrowed | findBorrowByStartTimeIsNotNullAndEndTimeIsNull
[**findByAuthorOrTitleContainingUsingGET**](BorrowControllerApi.md#findByAuthorOrTitleContainingUsingGET) | **GET** /borrows/search | findByAuthorOrTitleContaining
[**nowBorrowedBooksUsingGET**](BorrowControllerApi.md#nowBorrowedBooksUsingGET) | **GET** /borrows/borrowed/count | nowBorrowedBooks
[**returnBookUsingPUT**](BorrowControllerApi.md#returnBookUsingPUT) | **PUT** /borrows/return | returnBook
[**returnesBorrowesUsingGET**](BorrowControllerApi.md#returnesBorrowesUsingGET) | **GET** /borrows/returned/count | returnesBorrowes



## addBorrowUsingPOST

> addBorrowUsingPOST(borrowDto)

addBorrow

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
let borrowDto = new ApiDocumentation.BorrowDto(); // BorrowDto | borrowDto
apiInstance.addBorrowUsingPOST(borrowDto, (error, data, response) => {
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
 **borrowDto** | [**BorrowDto**](BorrowDto.md)| borrowDto | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deleteAllByBookUsingDELETE

> deleteAllByBookUsingDELETE(bookId)

deleteAllByBook

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
let bookId = 789; // Number | bookId
apiInstance.deleteAllByBookUsingDELETE(bookId, (error, data, response) => {
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
 **bookId** | **Number**| bookId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteAllByPersonUsingDELETE

> deleteAllByPersonUsingDELETE(personId)

deleteAllByPerson

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
let personId = 789; // Number | personId
apiInstance.deleteAllByPersonUsingDELETE(personId, (error, data, response) => {
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
 **personId** | **Number**| personId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## findAllUsingGET

> [BorrowDto] findAllUsingGET()

findAll

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
apiInstance.findAllUsingGET((error, data, response) => {
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

[**[BorrowDto]**](BorrowDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## findBorrowByBookIdUsingGET

> [BorrowDto] findBorrowByBookIdUsingGET(bookId)

findBorrowByBookId

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
let bookId = 789; // Number | bookId
apiInstance.findBorrowByBookIdUsingGET(bookId, (error, data, response) => {
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
 **bookId** | **Number**| bookId | 

### Return type

[**[BorrowDto]**](BorrowDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## findBorrowByPersonIdUsingGET

> [BorrowDto] findBorrowByPersonIdUsingGET(personId)

findBorrowByPersonId

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
let personId = 789; // Number | personId
apiInstance.findBorrowByPersonIdUsingGET(personId, (error, data, response) => {
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
 **personId** | **Number**| personId | 

### Return type

[**[BorrowDto]**](BorrowDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## findBorrowByStartTimeAndEndTimeIsNotNullUsingGET

> [BorrowDto] findBorrowByStartTimeAndEndTimeIsNotNullUsingGET()

findBorrowByStartTimeAndEndTimeIsNotNull

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
apiInstance.findBorrowByStartTimeAndEndTimeIsNotNullUsingGET((error, data, response) => {
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

[**[BorrowDto]**](BorrowDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## findBorrowByStartTimeIsNotNullAndEndTimeIsNullUsingGET

> [BorrowDto] findBorrowByStartTimeIsNotNullAndEndTimeIsNullUsingGET()

findBorrowByStartTimeIsNotNullAndEndTimeIsNull

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
apiInstance.findBorrowByStartTimeIsNotNullAndEndTimeIsNullUsingGET((error, data, response) => {
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

[**[BorrowDto]**](BorrowDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## findByAuthorOrTitleContainingUsingGET

> [BorrowDto] findByAuthorOrTitleContainingUsingGET(search)

findByAuthorOrTitleContaining

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
let search = "search_example"; // String | search
apiInstance.findByAuthorOrTitleContainingUsingGET(search, (error, data, response) => {
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
 **search** | **String**| search | 

### Return type

[**[BorrowDto]**](BorrowDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## nowBorrowedBooksUsingGET

> Number nowBorrowedBooksUsingGET()

nowBorrowedBooks

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
apiInstance.nowBorrowedBooksUsingGET((error, data, response) => {
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

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## returnBookUsingPUT

> returnBookUsingPUT(borrowDto)

returnBook

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
let borrowDto = new ApiDocumentation.BorrowDto(); // BorrowDto | borrowDto
apiInstance.returnBookUsingPUT(borrowDto, (error, data, response) => {
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
 **borrowDto** | [**BorrowDto**](BorrowDto.md)| borrowDto | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## returnesBorrowesUsingGET

> Number returnesBorrowesUsingGET()

returnesBorrowes

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.BorrowControllerApi();
apiInstance.returnesBorrowesUsingGET((error, data, response) => {
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

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*

