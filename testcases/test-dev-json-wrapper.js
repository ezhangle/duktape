/* When encoding any value (val) using JSON.stringigy(), encoding begins
 * with a dummy wrapper object:
 *
 *   { "": val }
 *
 * This seems to be a purely internal matter but is not: the wrapper
 * object is accessible to a replacement function.
 */

var val;
var t;

/*===
replacer
object
foo

foo
===*/

// Here the wrapper object is: { "": "foo" }

val = "foo";
t = JSON.stringify(val, function(k, v) {
    // this binding: holder object, i.e. the wrapper
    // k: key
    // v: value

    print("replacer");
    print(typeof this);
    print(this['']);  // access the empty string key of the wrapper!
    print(k);         // empty string
    print(v);         // 'foo'
});
