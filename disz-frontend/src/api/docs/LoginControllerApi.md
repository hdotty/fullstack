# ApiDocumentation.LoginControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginUsingPOST**](LoginControllerApi.md#loginUsingPOST) | **POST** /login | login
[**logoutUsingPOST**](LoginControllerApi.md#logoutUsingPOST) | **POST** /logout | logout



## loginUsingPOST

> loginUsingPOST(dto)

login

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.LoginControllerApi();
let dto = new ApiDocumentation.AuthenticationDto(); // AuthenticationDto | dto
apiInstance.loginUsingPOST(dto, (error, data, response) => {
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
 **dto** | [**AuthenticationDto**](AuthenticationDto.md)| dto | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## logoutUsingPOST

> logoutUsingPOST()

logout

### Example

```javascript
import ApiDocumentation from 'api_documentation';

let apiInstance = new ApiDocumentation.LoginControllerApi();
apiInstance.logoutUsingPOST((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

