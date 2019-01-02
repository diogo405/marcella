# Marcella 🕵🏻‍♀️

![parrot](https://github.com/diogo405/parrot/blob/master/marcella-banner.jpeg?raw=true)

How frustating is for a user to re-type a field in a form when they accidentally close the page or reload the browser? Marcella is a js that saves user's form to session storage preventing data loss.


## How to use it 🤔

1. Add 'js-marcella' class to fields that you wanna to be saved
2. Put marcella.js script (only 1kb) in your page 
3. Instantiate it, done!

```
<html>
  <body>
    .
    .
    .
    <label>Email</label>
    <input class="js-marcella" name="customerEmail" type="email">
    .
    .
    .
    <script src="marcella.js"></script>
    <script>
      new Marcella();
    </script>
    </body>
</html>
```


## Html Sample

Download and run sample.html in your browser 👍🏽


## License

This project is licensed under the MIT License️
