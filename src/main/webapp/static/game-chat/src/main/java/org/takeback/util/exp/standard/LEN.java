package org.takeback.util.exp.standard;

import org.takeback.util.converter.ConversionUtils;
import org.takeback.util.exp.Expression;
import org.takeback.util.exp.ExpressionProcessor;
import org.takeback.util.exp.exception.ExprException;

import java.util.List;

public class LEN extends Expression {

	public LEN() {
		symbol = "len";
	}

	@Override
	public Object run(List<?> ls, ExpressionProcessor processor) throws ExprException {
		Object o = ls.get(1);
		if (o instanceof List) {
			o = processor.run((List<?>) o);
		}
		String str = ConversionUtils.convert(o, String.class);
		return str.length();
	}

	@Override
	public String toString(List<?> ls, ExpressionProcessor processor) throws ExprException {
		StringBuffer sb = new StringBuffer(symbol).append("(");
		Object lso = ls.get(1);
		if (lso instanceof List) {
			sb.append(processor.toString((List<?>) lso));
		} else {
			sb.append("'").append(ConversionUtils.convert(lso, String.class)).append("'");
		}
		sb.append(")");
		return sb.toString();
	}

}
