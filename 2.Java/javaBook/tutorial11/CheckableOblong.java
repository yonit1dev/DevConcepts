package javaBook.tutorial11;

import javaBook.tutorial7.Oblong;

public class CheckableOblong extends Oblong implements Checkable {

    public CheckableOblong(double width, double height) {
        super(width, height);
    }

    @Override
    public boolean check() {
        return this.getWidth() > 0 && this.getHeight() > 0;
    }

}
