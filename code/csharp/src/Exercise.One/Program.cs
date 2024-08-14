using Exercise.One.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseSwagger();
app.UseSwaggerUI();

app.MapPost("/add", Calculator.Add)
    .WithName("CalculatorAdd")
    .WithOpenApi();

app.MapPost("/subtract", Calculator.Subtract)
    .WithName("CalculatorSubtract")
    .WithOpenApi();

app.MapPost("/multiply", Calculator.Multiply)
    .WithName("CalculatorMultiply")
    .WithOpenApi();

app.MapPost("/divide", Calculator.Divide)
    .WithName("CalculatorDivide")
    .WithOpenApi();

app.Run();
