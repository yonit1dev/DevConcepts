package javaBook.tutorial11;

public class SimpleGeneric<T> {
    private T value;

    public T getValue() {
        return value;
    }

    public void setValue(T value) {
        this.value = value;
    }
}
