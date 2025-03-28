// 4 - template espression

export const TemplateExpression = () => {
    const name = "Gustavo";

    const data = {
        age: 26,
        job: "Aprendendo React"
    }

  return (
    <div>
        <p>A soma é {2 + 2}</p>
        <h3>Bem vindo {name}</h3>
        <p>Sua idade é {data.age} anos </p>
        <p>Meu job é {data.job}</p>
    </div>
  )
}
