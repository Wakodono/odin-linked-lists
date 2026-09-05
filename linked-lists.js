export function linkedList() {
    let head = null;

    return {
        append(value) {
            if (head === null) {
                head = node(value)
            } else {
                let current = head;

                while (current.nextNode) {
                    current = current.nextNode
                }

                current.nextNode = node(value);
            }
        },

        prepend(value) {
            head = node(value, head);
        },

        toString() {
            // if list is empty return null
            if (head === null) {
                return ""
            } else {
                let current = head

                let result = ""

                while (current !== null) {
                    result += "( " + current.value + " ) -> "
                    current = current.nextNode
                }

                result += "null"

                return result
            }
        },

        tail() {
            if (head === null) {
                return undefined
            } else {
                let current = head;

                while (current.nextNode) {
                    current = current.nextNode;
                }

                return current.value;
            }

        },

        head() {
            if (head === null) {
                return undefined;
            } else {
                return head.value;
            }
        },

        size() {
            if (head === null) {
                return 0
            } else {
                let current = head
                let count = 0

                while (current !== null) {
                    count++
                    current = current.nextNode
                }

                return count
            }
        },

        at(index) {
            let current = head;

            if (head === null) {
                return undefined;
            } else {
                for (let i = 0; i < index; i++) {
                    current = current.nextNode;
                }

                if (current === null) {
                    return undefined;
                }

                return current.value;
            }
        },

        pop() {
            let startNodeValue = head.value;

            if (head === null) {
                return undefined;
            }

            head = head.nextNode

            return startNodeValue

        },

        findIndex(value) {
            let current = head
            let count = 0

            while (current !== null) {

                if (current.value === value) {
                    return count
                }

                count++

                current = current.nextNode
            }

            return -1;
        },

        // contains(value) returns true if the passed in value is in the list and otherwise returns false.

        contains(value = null) {
            if (value === null) {
                return false;
            }

            let current = head;

            while (current !== null) {
                if (current.value === value) {
                    return true;
                }

                current = current.nextNode;
            }

            return false;
        },

        insertAt(index, ...values) {
            if (index === 0) {
                head = node(values[0], head);

            } else if (index < 0 || index > this.size()) {
                throw new RangeError("That index was out of bounds!");
                
            } else {

                let current = head;

                for (let i = 0; i < index - 1; i++) {
                    current = current.nextNode;
                }

                for (value of values ) {

                    let newSpecies = node(value, current.nextNode);
    
                    current.nextNode = newSpecies;

                    current = newSpecies;
                }

            }
        },

        removeAt(index) {
            /* pop() {
                let startNodeValue = head.value;
    
                if (head === null) {
                    return undefined;
                }
    
                head = head.nextNode
    
                return startNodeValue
    
            }, */

            if (index === 0) {
                this.pop();
            } else if (index < 0 || index > this.size()) {

                throw new RangeError("That index was out of bounds!");

            }  else {
                let current = head;

                for (let i = 0; i < index -1; i++) {
                    current = current.nextNode;
                }

                current.nextNode = current.nextNode.nextNode;

            }

            
        }

    }
};

function node(value, nextNode = null) {
    return {
        value,
        nextNode,
    };
}