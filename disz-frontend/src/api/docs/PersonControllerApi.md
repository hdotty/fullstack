# ApiDocumentation.PersonControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPersonUsingPOST**](PersonControllerApi.md#addPersonUsingPOST) | **POST** /signIn | addPerson
[**deletePersonUsingDELETE**](PersonControllerApi.md#deletePersonUsingDELETE) | **DELETE** /person/{id} | deletePerson
[**findPersonUsingGET**](PersonControllerApi.md#findPersonUsingGET) | **GET** /person/search | findPerson
[**getLoggedInPersonUsingGET**](PersonControllerApi.md#getLoggedInPersonUsingGET) | **GET** /person/loggedIn | getLoggedInPerson
[**getPersonUsingGET**](PersonControllerApi.md#getPersonUsingGET) | **GET** /person/{id} | getPerson
[**getPersonsUsingGET**](PersonControllerApi.md#getPersonsUsingGET) | **GET** /person | getPersons
[**personsBooksUsingGET**](PersonControllerApi.md#personsBooksUsingGET) | **GET** /persons | personsBooks
[**pswChangeUsingPUT**](PersonControllerApi.md#pswChangeUsingPUT) | **PUT** /person/{oldPassword}/{newPassword} | pswChange
[**setAsAdminUsingPOST**](PersonControllerApi.md#setAsAdminUsingPOST) | **POST** /person/admin | setAsAdmin
[**updatePersonUsingPUT**](PersonControllerApi.md#updatePersonUsingPUT) | **PUT** /person | updatePerson



## addPersonUsingPOST

> addPersonUsingPOST(personDto)

addPerson

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
let personDto = new ApiDocumentation.PersonDto(); // PersonDto | personDto
apiInstance.addPersonUsingPOST(personDto, (error, data, response) => {
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
 **personDto** | [**PersonDto**](PersonDto.md)| personDto | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deletePersonUsingDELETE

> deletePersonUsingDELETE(id)

deletePerson

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
let id = 789; // Number | id
apiInstance.deletePersonUsingDELETE(id, (error, data, response) => {
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


## findPersonUsingGET

> [PersonDto] findPersonUsingGET(query)

findPerson

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
let query = "query_example"; // String | query
apiInstance.findPersonUsingGET(query, (error, data, response) => {
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

[**[PersonDto]**](PersonDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getLoggedInPersonUsingGET

> PersonDto getLoggedInPersonUsingGET()

getLoggedInPerson

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
apiInstance.getLoggedInPersonUsingGET((error, data, response) => {
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

[**PersonDto**](PersonDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getPersonUsingGET

> PersonDto getPersonUsingGET(id)

getPerson

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
let id = 789; // Number | id
apiInstance.getPersonUsingGET(id, (error, data, response) => {
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

[**PersonDto**](PersonDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## getPersonsUsingGET

> [PersonDto] getPersonsUsingGET()

getPersons

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
apiInstance.getPersonsUsingGET((error, data, response) => {
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

[**[PersonDto]**](PersonDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## personsBooksUsingGET

> [BorrowDto] personsBooksUsingGET(personDto)

personsBooks

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
let personDto = new ApiDocumentation.PersonDto(); // PersonDto | personDto
apiInstance.personsBooksUsingGET(personDto, (error, data, response) => {
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
 **personDto** | [**PersonDto**](PersonDto.md)| personDto | 

### Return type

[**[BorrowDto]**](BorrowDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


## pswChangeUsingPUT

> pswChangeUsingPUT(newPassword, oldPassword, personDto)

pswChange

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
let newPassword = "newPassword_example"; // String | newPassword
let oldPassword = "oldPassword_example"; // String | oldPassword
let personDto = new ApiDocumentation.PersonDto(); // PersonDto | personDto
apiInstance.pswChangeUsingPUT(newPassword, oldPassword, personDto, (error, data, response) => {
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
 **newPassword** | **String**| newPassword | 
 **oldPassword** | **String**| oldPassword | 
 **personDto** | [**PersonDto**](PersonDto.md)| personDto | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## setAsAdminUsingPOST

> setAsAdminUsingPOST(personDto, opts)

setAsAdmin

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
let personDto = new ApiDocumentation.PersonDto(); // PersonDto | personDto
let opts = {
  'admin': true // Boolean | admin
};
apiInstance.setAsAdminUsingPOST(personDto, opts, (error, data, response) => {
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
 **personDto** | [**PersonDto**](PersonDto.md)| personDto | 
 **admin** | **Boolean**| admin | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## updatePersonUsingPUT

> updatePersonUsingPUT(personDto, opts)

updatePerson

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.PersonControllerApi();
let personDto = new ApiDocumentation.PersonDto(); // PersonDto | personDto
let opts = {
  'email': "email_example", // String | email
  'firstName': "firstName_example", // String | firstName
  'lastName': "lastName_example" // String | lastName
};
apiInstance.updatePersonUsingPUT(personDto, opts, (error, data, response) => {
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
 **personDto** | [**PersonDto**](PersonDto.md)| personDto | 
 **email** | **String**| email | [optional] 
 **firstName** | **String**| firstName | [optional] 
 **lastName** | **String**| lastName | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

