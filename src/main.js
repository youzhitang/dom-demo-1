const div = dom.create('<div>一个div</div>')
const div1 = dom.create('<div></div>')
const div3 = dom.create('<div id = "parent">一个新的div</div>')



dom.after(test, div);

dom.wrap(test, div3)


const nodes = dom.empty(window.empty)
console.log(nodes)

dom.attr(test, 'title', 'Hi,I am youzhitang')

const title = dom.attr(test, 'title')//用attr函数获取test的title属性，然后把title属性放在title变量里，JS的一个函数可以接受多种参数。
console.log(`title:${title}`)

dom.text(test, '你好，这是新的内容')
dom.text(test)

dom.style(test, { border: '1px solid red', color: 'blue' })

dom.class.add(test, 'red')
dom.class.add(test, 'blue')
dom.class.remove(test, 'blue')
console.log(dom.class.contains(test, 'blue'))

const fn = () => {
    console.log('点击了')
}
dom.on(test, 'click', fn)

const testDiv = dom.find('#test')[0]
console.log(testDiv)
const test2 = dom.find('#test2')[0]
console.log(dom.find('.red', test2)[0])

console.log(dom.parent(test))


const s2 = dom.find('#s2')[0]
console.log(dom.siblings(s2))
console.log(dom.next(s2))
console.log(dom.previous(s2))

const t = dom.find('#travel')[0]

dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

console.log(dom.index(t2))