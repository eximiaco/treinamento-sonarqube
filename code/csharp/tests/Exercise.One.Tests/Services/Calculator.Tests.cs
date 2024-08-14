using Exercise.One.Services;

namespace Exercise.One.Tests;

public class CalculatorTests
{
    [Fact]
    public void Calculator_AddTwoNumbers_ShouldReturnTheSum()
    {
        //Arrange
        var first = 1;
        var second = 2;
        var expected = 3;

        //Act
        var result = Calculator.Add(first, second);

        //Assert
        Assert.Equal(expected, result);
    }
    
    [Fact]
    public void Calculator_SubtractTwoNumbers_ShouldReturnTheDifference()
    {
        //Arrange
        var first = 5;
        var second = 1;
        var expected = 4;

        //Act
        var result = Calculator.Subtract(first, second);

        //Assert
        Assert.Equal(expected, result);
    }
}