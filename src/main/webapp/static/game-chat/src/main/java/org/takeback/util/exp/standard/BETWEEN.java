package org.takeback.util.exp.standard;

import org.takeback.util.exp.Expression;
import org.takeback.util.exp.ExpressionProcessor;
import org.takeback.util.exp.ExpressionUtils;
import org.takeback.util.exp.exception.ExprException;

import java.util.List;

public class BETWEEN extends Expression {

	public BETWEEN() {
		symbol = "between";
	}

	@Override
	public Object run(List<?> ls, ExpressionProcessor processor) throws ExprException {
		try {
			double v = ExpressionUtils.toNumber(ls.get(1), processor).doubleValue();
			double low = ExpressionUtils.toNumber(ls.get(2), processor).doubleValue();
			double high = ExpressionUtils.toNumber(ls.get(3), processor).doubleValue();

			return low < v && v < high;
		} catch (Exception e) {
			throw new ExprException(e.getMessage());
		}
	}

	public String toString(List<?> ls, ExpressionProcessor processor) throws ExprException {
		try {
			StringBuffer sb = new StringBuffer(ExpressionUtils.toString(ls.get(1), processor));
			sb.append(" between ").append(ExpressionUtils.toString(ls.get(2), processor)).append(" and ")
					.append(ExpressionUtils.toString(ls.get(3), processor));
			return sb.toString();
		} catch (Exception e) {
			throw new ExprException(e);
		}
	}
}
