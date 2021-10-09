# iscanyc/recond

![npm](https://img.shields.io/npm/dw/recond)
![NPM](https://img.shields.io/npm/l/recond)
![npm](https://img.shields.io/npm/v/recond)

> Recond makes react conditional render flexible. It is closer to if else statements.

## Example

Renders CondOne.

```js
<Recond
  methods={{
    CondOne: () => "Hello!",
    CondTwo: () => "Hey.",
  }}
  conditions={{
    CondOne: true,
    CondTwo: true,
  }}
/>
```

Renders CondTwo.

```js
<Recond
  methods={{
    CondOne: () => "Hello!",
    CondTwo: () => "Hey.",
  }}
  conditions={{
    CondOne: false,
    CondTwo: true,
  }}
/>
```

If doesnt match any condition, you can use defaultMethod. Now defaultMethod is rendered.

```js
<Recond
  methods={{
    CondOne: () => "Hello!",
    CondTwo: () => "Hey.",
  }}
  conditions={{
    CondOne: false,
    CondTwo: false,
  }}
  defaultValue="Hey, this is default value"
/>
```
