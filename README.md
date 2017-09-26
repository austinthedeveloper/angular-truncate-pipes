# angular-truncate-pipes

A collection of truncating pipes

## Requirements

- Angular >= 4.0.0

## Installation

`npm install angular-truncate-pipes --save`

In your app.module.ts:

```
import { TruncatePipesModule } from 'angular-truncate-pipes';
@NgModule({
    ...
    imports: [TruncatePipesModule]
    ...
});
```

## Background

- The count-to code was re-written from [this AngularJS module](https://github.com/sparkalow/angular-truncate)

- The package build is from robisim74's [angular-library-starter](https://github.com/robisim74/angular-library-starter)

## Examples

<table>
  <thead>
    <th>Pipe</th>
    <th>Args</th>
    <th>Result</th>
  </thead>
  <tbody>
    <tr>
      <td>characters</td>
      <td>5</td>
      <td>{{truncateWord | characters:5}}</td>
    </tr>
    <tr>
      <td>characters</td>
      <td>0</td>
      <td>{{truncateWord | characters:0}}</td>
    </tr>
    <tr>
      <td>characters</td>
      <td>10:true</td>
      <td>{{truncateWord | characters:10:true}}</td>
    </tr>
    <tr>
      <td>splitcharacters</td>
      <td>15</td>
      <td>{{truncateWord | splitcharacters:15}}</td>
    </tr>
    <tr>
      <td>splitcharacters</td>
      <td></td>
      <td>{{truncateWord | splitcharacters}}</td>
    </tr>
    <tr>
      <td>words</td>
      <td></td>
      <td>{{truncateWord | words}}</td>
    </tr>
    <tr>
      <td>words</td>
      <td>2</td>
      <td>{{truncateWord | words: 2}}</td>
    </tr>
  </tbody>
</table>

## TODOS

- Write test scripts

## License

MIT
