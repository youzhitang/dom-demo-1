window.dom = {
    create(string) {
        const container = document.createElement("template")
        //template可以放任意元素，不会在页面中显示
        container.innerHTML = string.trim()
        //trim把字符串两边的空格去掉
        console.log(container)
        return container.content.firstChild
    },
    after(node, node2) {
        node.parentNode.insertBefore(node2, node.nextSibling)
    },
    before(node, node3) {
        node.parentNode.insertBefore(node3, node)
    },
    append(parent, child) {
        parent.appendChild(child)
    },
    wrap(node, parent) {
        //先在节点前面新建一个节点，然后把这个节点变成刚刚新建那个节点的子节点
        dom.before(node, parent)
        dom.append(parent, node)
    },
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    empty(node) {
        const array = []
        x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },
    attr(node, name, value) { //重载
        if (arguments.length === 3) {
            node.setAttribute(name, value)
            //三个值实现写
        } else {
            return node.getAttribute(name)
            //两个值实现读
        }
    },
    text(node, string) { //适配
        if (arguments.length === 2) {
            if ('innerText' in node) {
                node.innerText = string // ie
            } else {
                node.textContent = string // firefox/Chrome
            }
        } else {
            if ('innerText' in node) {
                return node.innerText
            } else {
                return node.textContent
            }
        }

    },
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHTML = string
        } else {
            return node.innerHTML
        }
    },
    style(node, name, value) {
        if (arguments.length === 3) {
            //dom.style(div,'color','red')
            node.style[name] = value
        } else if (arguments.length === 2) {
            if (typeof name === 'string') {
                //dom.style(div,'color')
                return node.style[name]
            } else {
                //dom.style(div,{color:'red'})
                const object = name
                for (let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
    },
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        contains(node, className) {
            return node.classList.contains(className)
        }
    },
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },
    find(selector, scope) {
        //如果有scope就在scope调用，如果没有就用document调用
        return (scope || document).querySelectorAll(selector)
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    siblings(node) {
        return Array.from(node.parentNode.children)
            .filter(n => n !== node)
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    index(node) {
        const list = dom.children(node.parentNode)
        let i
        for (i = 0; i < list.length; i++) {
            if (list[i] === node) {
                break
            }
        }
        return i
    }
}




