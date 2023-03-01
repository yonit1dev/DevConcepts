package javaBook.tutorial11;

public class LambdaSyntax {
    public static void main(String[] args) {
        testMethod(
                (String name) -> {
                    String str = "Hello " + name;
                    return str;
                });
    }

    static void testMethod(TestInterface testInterface) {
        String result = testInterface.test("Yonathan");
        System.out.println(result);
    }
}
