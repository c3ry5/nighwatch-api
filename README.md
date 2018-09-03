# nighwatch-api

Nightwatch JS extension to allow it to test restful APIs

## Config

All of the configuration files are located in the `config` directory.

The configuration object is broken in to two parts **options** and **testvalue**.

```
{
    "options": {
        "method": "GET",
        "hostname": "localhost",
        "path": "/api",
        "headers": {
            "foo": "bar"
        }
    },
    "testvalue": "success"
}
```
