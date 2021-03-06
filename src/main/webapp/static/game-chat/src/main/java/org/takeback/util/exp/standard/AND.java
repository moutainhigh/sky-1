package org.takeback.util.exp.standard;

import org.takeback.util.exp.Expression;
import org.takeback.util.exp.ExpressionProcessor;
import org.takeback.util.exp.exception.ExprException;

import java.util.List;

public class AND extends Expression {

	public AND() {
		symbol = "and";
		needBrackets = true;
	}

	@SuppressWarnings({ "unchecked" })
	@Override
	public Object run(List<?> ls, ExpressionProcessor processor) throws ExprException {
		try {
			for (int i = 1, size = ls.size(); i < size; i++) {
				boolean r = (Boolean) processor.run((List<Object>) ls.get(i));
				if (!r) {
					return false;
				}
			}
			return true;
		} catch (Exception e) {
			throw new ExprException(e.getMessage());
		}
	}

}
