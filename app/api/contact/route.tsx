import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validación básica
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Todos los campos requeridos deben ser completados" }, { status: 400 })
    }

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: "Portafolio <onboarding@resend.dev>", // Cambiar por tu dominio verificado
      to: ["lukas_skyry_14@hotmail.cl"], // Email de Valentín
      subject: subject || `Nuevo mensaje de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2d5016;">Nuevo mensaje desde tu portafolio</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject || "Sin asunto"}</p>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #2d5016;">
            <h3>Mensaje:</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 14px;">
            Este mensaje fue enviado desde tu portafolio de fotografía.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("Error enviando email:", error)
      return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 })
    }

    return NextResponse.json({ message: "Mensaje enviado exitosamente", id: data?.id }, { status: 200 })
  } catch (error) {
    console.error("Error en API de contacto:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
