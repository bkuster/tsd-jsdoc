/** @module test-export-20190914004600 */

class _NotExported {
}

/**
 *
 */
class _Foo {
}

/**
 * @extends _Foo
 */
class _Bar extends _Foo {
}

/**
 *
 */
class _Baz {
}

/**
 * Jsdoc comment for 'documented' generation strategy.
 */
module.exports = {
    /**
     * Named export with 'module.exports = {name: ...}' on a lambda class.
     * @param {_Bar} bar
     * @extends _Baz
     */
    Qux:
        class extends _Baz {
            /**
             * Does not work! No doclet generated for this constructor.
             * @see [jsdoc#1699](https://github.com/jsdoc/jsdoc/issues/1699)
             * Please set the constructor documentation in the class declaration documentation.
             * @param {_Bar} bar
             */
            constructor(bar) {
                /**
                 * @type {_Foo}
                 * @readonly
                 */
                this.foo = bar;
            }
        }
};
